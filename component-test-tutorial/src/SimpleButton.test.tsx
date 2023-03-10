import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SimpleButton } from "./SimpleButton";

test('ボタンをクリックするとON/OFFの表示が切り替わる', () => {
    render(<SimpleButton />);
    const simpleButton = screen.getByRole('button');
    expect(simpleButton).toHaveTextContent('OFF');
    act(() => {
        userEvent.click(simpleButton);
    });
    expect(simpleButton).toHaveTextContent('ON');
});

test('描画されてすぐはOFFと表示されている', () => {
    const view = render(<SimpleButton />);
    expect(view.container).toMatchSnapshot();
});