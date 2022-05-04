import React from 'react';
import Link from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import {useHistory} from "react-router-dom";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {useCustomTheme} from "../../Providers/Theme/CustomThemeProvider";
import {useBreadcrumbsRoutes} from "../../Utils/Constants/Routing";


export const NavigationBreadcrumbs = () => {
  const {isDesktop} = useCustomTheme();
  const {breadcrumbRoutes, getOverrideUrl} = useBreadcrumbsRoutes();
  const breadcrumbs = useBreadcrumbs(breadcrumbRoutes);
  const history = useHistory();

  const onLink = (url) => history.push(url);

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextIcon fontSize="small" style={{color: '#FFFFFF'}}/>}
    >
      {breadcrumbs
        .slice(1)
        .map(({match, breadcrumb}, index) =>
          <Link
            style={{color: '#FFFFFF', fontSize: isDesktop ? 16 : 12}}
            key={index}
            to={getOverrideUrl(match)}
            onClick={() => onLink(getOverrideUrl(match))}
          >
            {breadcrumb}
          </Link>
        )}
    </Breadcrumbs>
  );
}
