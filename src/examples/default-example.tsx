import React from "react";
import {
  ConfigProvider,
  AdaptivityProvider,
  AppRoot,
  SplitCol,
  SplitLayout,
  View,
  Panel,
  PanelHeader,
  Group,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

export function Example() {
  return (
    <SplitLayout>
      <SplitCol>
        <View activePanel="panel1">
          <Panel id="panel1">
            <PanelHeader>Panel</PanelHeader>
            <Group></Group>
          </Panel>
        </View>
      </SplitCol>
    </SplitLayout>
  );
}

const App = () => (
  <React.StrictMode>
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <Example />
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  </React.StrictMode>
);

export default App;
