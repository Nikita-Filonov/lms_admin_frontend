export const useBreadcrumbsRoutes = () => {

  const breadcrumbRoutes = [
    {path: '/courses', breadcrumb: 'Курсы'},
    {path: '/courses/edit', breadcrumb: 'Редактирование'},
    {path: '/courses/edit/:courseId'},
  ];

  const overrideBreadcrumbRoutes: any = {};

  const getOverrideUrl = (match: any) => Object.keys(overrideBreadcrumbRoutes).includes(match.path)
    ? match.url + overrideBreadcrumbRoutes[match.path]
    : match.url

  return {breadcrumbRoutes, getOverrideUrl};
};
