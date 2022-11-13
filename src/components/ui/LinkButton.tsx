import { Button, IconButton, MenuItem, Tooltip } from '@mui/material';
import Link from 'next/link';

const LinkButton: React.FCC<{
  href: string;
  tooltip?: string;
  variant?: 'IconButton' | 'Contained' | 'Outlined' | 'Text' | 'MenuItem';
  newTab?: boolean;
  buttonProps?: any;
}> = ({ href, tooltip, variant, newTab, buttonProps, children }) => {
  // (presently only added to MenuItem)
  const target = newTab ? '_blank' : '_self';

  if (variant === 'MenuItem') {
    return (
      <Link passHref href={href} legacyBehavior>
        <a style={{ textDecoration: 'none', color: 'inherit' }} target={target}>
          {!!tooltip ? (
            <Tooltip title={tooltip}>
              <MenuItem {...(buttonProps || {})}>{children}</MenuItem>
            </Tooltip>
          ) : (
            <MenuItem {...(buttonProps || {})}>{children}</MenuItem>
          )}
        </a>
      </Link>
    );
  } else if (variant === 'IconButton') {
    return (
      <Link passHref href={href} legacyBehavior>
        <a style={{ textDecoration: 'none', color: 'inherit' }}>
          {!!tooltip ? (
            <Tooltip title={tooltip}>
              <IconButton {...(buttonProps || {})}>{children}</IconButton>
            </Tooltip>
          ) : (
            <IconButton {...(buttonProps || {})}>{children}</IconButton>
          )}
        </a>
      </Link>
    );
  } else {
    return (
      <Link passHref href={href} legacyBehavior>
        <a style={{ textDecoration: 'none', color: 'inherit' }} target={target}>
          {!!tooltip ? (
            <Tooltip title={tooltip}>
              <Button variant={variant as any} {...(buttonProps || {})}>
                {children}
              </Button>
            </Tooltip>
          ) : (
            <Button variant={variant as any} {...(buttonProps || {})}>
              {children}
            </Button>
          )}
        </a>
      </Link>
    );
  }
};

export default LinkButton;
