export class PWAConfig {

  public static readonly APP_CONFIG = {
    tabsPlacement: 'top'
  };

  public static readonly MenuItems = [
    { title: 'Home', component: 'HomePage' },
    { title: 'Center', component: 'CenterExamplePage' },
    { title: 'Images', component: 'ImagesExamplePage' },
    { title: 'Split Pane', component: 'SplitPaneExamplePage' },
    { title: 'Menu', component: 'CustomMenuExamplePage' },
  ];

  public static readonly MenuItemsTopNav = [
    { title: 'Account', component: 'HomePage' },
    { title: 'Logout', component: 'CenterExamplePage' },
  ];

}

export interface IMenuItems {
  title: string,
  component: string,
  icon?: string,
}