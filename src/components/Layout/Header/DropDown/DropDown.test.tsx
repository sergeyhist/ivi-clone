import { store } from "/src/store";
import {setWindowSize} from "/src/store/slices/windowSizeSlice";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import DropDown from "/src/components/Layout/Header/DropDown/DropDown";

store.dispatch(setWindowSize({width: 1200, height: 500}));

describe("DropDown",()=>{
  it('renders without errors when windowSizeWidth is greater than 1160', () => {
    const { container } = render(<Provider store={store}><DropDown dropDownType="movies" /></Provider>  );
    expect(container).toBeDefined();
  });
  it('renders without errors TvDropDown', () => {
    const { container } = render(<Provider store={store}><DropDown dropDownType="tv" /></Provider>  );
    expect(container).toBeDefined();
  });
  it('renders without errors NotificationDropDown ', () => {
    const { container } = render(<Provider store={store}><DropDown dropDownType="notification" /></Provider>  );
    expect(container).toBeDefined();
  });
  it('renders without errors ProfileDropDown', () => {
    const { container } = render(<Provider store={store}><DropDown dropDownType="profile" /></Provider>  );
    expect(container).toBeDefined();
  });
  it('renders without errors SubscriptionDropdown', () => {
    const { container } = render(<Provider store={store}><DropDown dropDownType="subscription" /></Provider>  );
    expect(container).toBeDefined();
  });

  it('does not render when windowSizeWidth is less than or equal to 1160', () => {
    store.dispatch(setWindowSize({width: 1159, height: 500}));
    const { container } = render(<Provider store={store}><DropDown dropDownType="movies" /></Provider>  );
    expect(container).toBeEmptyDOMElement();
  });

})