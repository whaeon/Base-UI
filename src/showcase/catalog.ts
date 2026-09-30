export type ComponentStatus = "todo" | "wip" | "done";

export interface CatalogItem {
  name: string;
  slug: string;
  category: string;
  status: ComponentStatus;
  contract: string;
  directory: string;
  page: string;
  priority: string;
  remark: string;
}

export interface CatalogGroup {
  category: string;
  items: CatalogItem[];
}

const STATUS_MARK: Record<string, ComponentStatus> = {
  "⬜": "todo",
  "🔄": "wip",
  "✅": "done",
};

function slugify(name: string): string {
  return name.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

export function parseComponentCatalog(markdown: string): CatalogGroup[] {
  const groups: CatalogGroup[] = [];
  let category = "";

  for (const rawLine of markdown.split("\n")) {
    const heading = rawLine.match(/^##\s+(.+?)(?:（|$)/);
    if (heading && !["状态图例", "开发策略", "收录说明"].includes(heading[1].trim())) {
      category = heading[1].trim();
      continue;
    }

    if (!category || !rawLine.startsWith("|")) {
      continue;
    }

    const cells = rawLine
      .split("|")
      .slice(1, -1)
      .map((cell) => cell.trim());

    if (cells.length < 7 || cells[0] === "组件名" || cells[0].startsWith("-")) {
      continue;
    }

    const [name, statusMark, contract, directory, page, priority, remark] = cells;
    let group = groups.find((item) => item.category === category);
    if (!group) {
      group = { category, items: [] };
      groups.push(group);
    }

    group.items.push({
      name,
      slug: slugify(name),
      category,
      status: STATUS_MARK[statusMark] ?? "todo",
      contract,
      directory,
      page,
      priority,
      remark,
    });
  }

  return groups;
}

export function findCatalogItem(groups: CatalogGroup[], slug: string): CatalogItem | undefined {
  for (const group of groups) {
    const found = group.items.find((item) => item.slug === slug);
    if (found) {
      return found;
    }
  }
  return undefined;
}

export function countByStatus(groups: CatalogGroup[]) {
  const stats = { total: 0, done: 0, wip: 0, todo: 0 };
  for (const group of groups) {
    for (const item of group.items) {
      stats.total += 1;
      stats[item.status] += 1;
    }
  }
  return stats;
}
