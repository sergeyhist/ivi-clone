// import { render, screen } from "@testing-library/react";
// import Links from "/src/components/Layout/Header/DropDown/Links/Links";
// import { store } from "/src/store";
// import {Provider} from "react-redux";
// import LinkList from "/src/components/Layout/Header/DropDown/LinkList/LinkList";
//
// describe("LinkList", () => {
//   const props ={
//     selectedGenre: "tv",
//   };
//
//   it("should render the genre links", () => {
//     render(
//       <Provider store={store}>
//         <LinkList selectedGenre="movies"/>
//       </Provider>
//     );
//
//     const genreLinks = screen.getAllByRole("link");
//     expect(genreLinks).toHaveLength(20);
//     expect(genreLinks[0]).toHaveAttribute("href", "/movies?genres=anime");
//     expect(genreLinks[0]).toHaveTextContent("Аниме");
//     expect(genreLinks[1]).toHaveAttribute("href", "/movies?genres=arthouse");
//     expect(genreLinks[1]).toHaveTextContent("Артхаус");
//     // ...
//   });
// });