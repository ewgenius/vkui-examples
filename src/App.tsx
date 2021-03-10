import React, { useState } from "react";
import {
  ConfigProvider,
  AdaptivityProvider,
  AppRoot,
  SplitCol,
  SplitLayout,
  View,
  Panel,
  PanelHeader,
  WebviewType,
  ANDROID,
  CellButton,
  Cell,
  Div,
  ScreenSpinner,
} from "@vkontakte/vkui";
import { SandboxEmbed } from "@codesandbox/react-embed";
import "@vkontakte/vkui/dist/vkui.css";

const dependencies = require("../package.json").dependencies;
const vkuiVersion = dependencies["@vkontakte/vkui"];
const vkIconsVersion = dependencies["@vkontakte/icons"];
const vkjsVersion = dependencies["@vkontakte/vkjs"];
const vkBridgeVersion = dependencies["@vkontakte/vk-bridge"];
console.log(vkuiVersion);

interface Example {
  path: string;
  name: string;
}

const examples: Example[] = [
  {
    name: "Default Example",
    path: "src/examples/default-example.tsx",
  },
  {
    name: "Epic/Tabbar Example",
    path: "src/examples/epic-tabbar-example.tsx",
  },
  {
    name: "Modals Example",
    path: "src/examples/modals-example.tsx",
  },
  {
    name: "ActionSheet Example",
    path: "src/examples/actionsheet-example.tsx",
  },
  {
    name: "Panels Example (not finished)",
    path: "src/examples/panels-example.tsx",
  },
  {
    name: "SplitLayout Example (not finished)",
    path: "src/examples/splitlayout-example.tsx",
  },
];

export function Preview() {
  const [example, selectExample] = useState<Example>(examples[0]);

  return (
    <SplitLayout
      style={{ justifyContent: "center" }}
      header={<PanelHeader separator={false} />}
    >
      <SplitCol fixed width="280px" maxWidth="280px">
        <Panel>
          <PanelHeader />
          <Div>
            {examples.map((e) =>
              e.path === example.path ? (
                <Cell>
                  <span style={{ fontWeight: "bold" }}>{e.name}</span>
                </Cell>
              ) : (
                <CellButton onClick={() => selectExample(e)}>
                  {e.name}
                </CellButton>
              )
            )}
          </Div>
        </Panel>
      </SplitCol>
      <SplitCol
        animate={false}
        spaced
        width="calc(100% - 280px)"
        maxWidth="calc(100% - 280px)"
      >
        <View activePanel="preview">
          <Panel id="preview">
            <PanelHeader>VKUI Playground</PanelHeader>
            <SandboxEmbed
              sandboxOptions={{
                name: example.name,
                examplePath: example.path,
                gitInfo: {
                  account: "ewgenius",
                  repository: "vkui-examples",
                  host: "github",
                },
                dependencies: {
                  "@vkontakte/icons": vkIconsVersion,
                  "@vkontakte/vk-bridge": vkBridgeVersion,
                  "@vkontakte/vkjs": vkjsVersion,
                  "@vkontakte/vkui": vkuiVersion,
                  "react-scripts": "4.0.2",
                },
              }}
              embedOptions={{
                codemirror: true,
                fontsize: 14,
                module: "example.tsx",
              }}
              height="calc(100vh - 80px)"
            >
              <ScreenSpinner />
            </SandboxEmbed>
          </Panel>
        </View>
      </SplitCol>
    </SplitLayout>
  );
}

const App = () => (
  <ConfigProvider webviewType={WebviewType.INTERNAL} platform={ANDROID}>
    <AdaptivityProvider>
      <AppRoot>
        <Preview />
      </AppRoot>
    </AdaptivityProvider>
  </ConfigProvider>
);

export default App;
