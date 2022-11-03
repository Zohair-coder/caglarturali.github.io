/**
 * MainButtons component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import ButtonLink from '../../../../components/ButtonLink';
import GHButton, { GHButtonProps } from '../../../../components/GHButton';
import { ContactItem } from '../../../../models';
import { getGHCredentials } from '../../../../utils';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface MainButtonsProps {
  contactData: ContactItem[];
  repoUrl: string;
}

const MainButtons: React.FC<MainButtonsProps> = ({ contactData, repoUrl }) => {
  const classes = useStyles();

  // eslint-disable-next-line
  const { repo, username } = getGHCredentials(repoUrl);

  const ghButtons: GHButtonProps[] = [
    // Follow button
    {
      resource: {
        endpoint: `https://api.github.com/users/${username}`,
        attr: 'followers',
      },
      href: `https://github.com/${username}`,
      title: `Follow @${username} on GitHub`,
      icon: ['fab', 'github'],
      size: 'lg',
      text: `Follow @${username}`,
    },
    // Stargazers button
    // {
    //   resource: {
    //     endpoint: `https://api.github.com/repos/${username}/${repo}`,
    //     attr: 'stargazers_count',
    //   },
    //   href: repoUrl,
    //   title: `Star ${username}/${repo} on GitHub`,
    //   icon: 'star',
    //   size: 'sm',
    //   text: 'Star',
    // },
  ];

  const mainContacts = contactData.filter((c) => c.isMain) as ContactItem[];

  return (
    <div className={classes.root}>
      <div>
        {ghButtons.map((btn) => (
          <GHButton key={`gh-btn-${btn.resource.attr}`} {...btn} />
        ))}
      </div>
      <div className={classes.mainButtons}>
        {mainContacts.map((contact) => (
          <ButtonLink
            key={`main-contact-${contact.icon}`}
            href={contact.url}
            icon={contact.icon as IconProp}
            size="lg"
            text={contact.text || ''}
            title=""
          />
        ))}
      </div>
    </div>
  );
};

export default MainButtons;
