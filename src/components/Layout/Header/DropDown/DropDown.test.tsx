import { store } from "/src/store";
import { setWindowSize } from "/src/store/slices/windowSizeSlice";
import DropDown from "/src/components/Layout/Header/DropDown/DropDown";
import { renderWithProviders } from "/src/utils/test-utils";

store.dispatch(setWindowSize({ width: 1200, height: 500 }));

describe("DropDown", () => {
  it("renders without errors when windowSizeWidth is greater than 1160", () => {
    const { container } = renderWithProviders(
      <DropDown dropDownType="movies" />
    );
    expect(container).toBeDefined();
  });

  it("renders without errors TvDropDown", () => {
    const { container } = renderWithProviders(<DropDown dropDownType="tv" />);
    expect(container).toBeDefined();
  });

  it("renders without errors NotificationDropDown ", () => {
    const { container } = renderWithProviders(
      <DropDown dropDownType="notification" />
    );
    expect(container).toBeDefined();
  });

  it("renders without errors ProfileDropDown", () => {
    const { container } = renderWithProviders(
      <DropDown dropDownType="profile" />
    );
    expect(container).toBeDefined();
  });

  it("renders without errors SubscriptionDropdown", () => {
    const { container } = renderWithProviders(
      <DropDown dropDownType="subscription" />
    );
    expect(container).toBeDefined();
  });

  it("does not render when windowSizeWidth is less than or equal to 1160", () => {
    store.dispatch(setWindowSize({ width: 1159, height: 500 }));
    const { container } = renderWithProviders(
      <DropDown dropDownType="movies" />
    );
    expect(container).toBeEmptyDOMElement();
  });
});
