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
import { SandboxEmbed } from "@codesandbox/react-embed";
import "@vkontakte/vkui/dist/vkui.css";

export function Example() {
  return (
    <SplitLayout>
      <SplitCol>
        <View activePanel="panel1">
          <Panel id="panel1">
            <PanelHeader>Panel</PanelHeader>
            <Group>
              <SandboxEmbed
                sandboxOptions={{
                  name: "VKUI - Basic Example",
                  examplePath: "src/examples/default-example.tsx",
                  gitInfo: {
                    account: "ewgenius",
                    repository: "vkui-examples",
                    host: "github",
                  },
                }}
                embedOptions={{
                  codemirror: true,
                  fontsize: 14,
                }}
                height="100vh"
              ></SandboxEmbed>
            </Group>
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
