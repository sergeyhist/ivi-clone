import {renderHook} from "@testing-library/react";
import useOverflowHidden from "/src/hooks/useOverflowHidden";
import {useAppSelector} from "/src/hooks/redux";


jest.mock('src/hooks/redux');
describe('useAppInterceptors', () => {
  it('should set body overflow to "hidden" when isShow is true', () => {
    (useAppSelector as jest.Mock).mockReturnValueOnce({ showModal: { showMovieModal: { isShow: true } } });

    renderHook(() => useOverflowHidden(true));

    expect(document.body.style.overflowY).toBe('hidden');
  });
});