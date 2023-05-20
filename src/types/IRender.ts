import { ToolkitStore } from "@reduxjs/toolkit/src/configureStore";
import { RootState } from "../store";
import { RenderResult } from "@testing-library/react";

export interface IProviderRender {
  store: ToolkitStore<RootState>;
  component: RenderResult;
}
