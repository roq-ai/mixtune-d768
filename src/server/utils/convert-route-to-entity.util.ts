const mapping: Record<string, string> = {
  organizations: 'organization',
  recipes: 'recipe',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
