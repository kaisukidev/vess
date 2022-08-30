import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/vess/blog',
    component: ComponentCreator('/vess/blog', '9ba'),
    exact: true
  },
  {
    path: '/vess/blog/archive',
    component: ComponentCreator('/vess/blog/archive', 'bc9'),
    exact: true
  },
  {
    path: '/vess/blog/first-blog-post',
    component: ComponentCreator('/vess/blog/first-blog-post', '8b5'),
    exact: true
  },
  {
    path: '/vess/blog/long-blog-post',
    component: ComponentCreator('/vess/blog/long-blog-post', '441'),
    exact: true
  },
  {
    path: '/vess/blog/mdx-blog-post',
    component: ComponentCreator('/vess/blog/mdx-blog-post', '651'),
    exact: true
  },
  {
    path: '/vess/blog/tags',
    component: ComponentCreator('/vess/blog/tags', '240'),
    exact: true
  },
  {
    path: '/vess/blog/tags/docusaurus',
    component: ComponentCreator('/vess/blog/tags/docusaurus', '9fb'),
    exact: true
  },
  {
    path: '/vess/blog/tags/facebook',
    component: ComponentCreator('/vess/blog/tags/facebook', '212'),
    exact: true
  },
  {
    path: '/vess/blog/tags/hello',
    component: ComponentCreator('/vess/blog/tags/hello', '545'),
    exact: true
  },
  {
    path: '/vess/blog/tags/hola',
    component: ComponentCreator('/vess/blog/tags/hola', 'e19'),
    exact: true
  },
  {
    path: '/vess/blog/welcome',
    component: ComponentCreator('/vess/blog/welcome', '0f5'),
    exact: true
  },
  {
    path: '/vess/markdown-page',
    component: ComponentCreator('/vess/markdown-page', '7b1'),
    exact: true
  },
  {
    path: '/vess/docs',
    component: ComponentCreator('/vess/docs', '233'),
    routes: [
      {
        path: '/vess/docs/category/tutorial---basics',
        component: ComponentCreator('/vess/docs/category/tutorial---basics', '0b9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/vess/docs/category/tutorial---extras',
        component: ComponentCreator('/vess/docs/category/tutorial---extras', '39f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/vess/docs/intro',
        component: ComponentCreator('/vess/docs/intro', '9a6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/vess/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/vess/docs/tutorial-basics/congratulations', '5c2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/vess/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/vess/docs/tutorial-basics/create-a-blog-post', 'dca'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/vess/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/vess/docs/tutorial-basics/create-a-document', 'ce4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/vess/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/vess/docs/tutorial-basics/create-a-page', '1a6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/vess/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/vess/docs/tutorial-basics/deploy-your-site', '246'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/vess/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/vess/docs/tutorial-basics/markdown-features', '453'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/vess/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/vess/docs/tutorial-extras/manage-docs-versions', 'fd0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/vess/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/vess/docs/tutorial-extras/translate-your-site', 'aeb'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/vess/',
    component: ComponentCreator('/vess/', '188'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
