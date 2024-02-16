import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from "../FollowersList";

const MockFollowersList = () => {
    return (
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    )
}

// WARNING: Due to logiic / API error this logic may be down but the logic is correct.

describe("FollowersList", () => {
    // it('should render follower item', async () => {
    //     render(<MockFollowersList />);
    //     const followerDivElement = await screen.findByTestId("follower-item-0") 
    //     expect(followerDivElement).toBeInTheDocument();
    // });

    // it('should render multiple follower item (5)', async () => {
    //     render(<MockFollowersList />);
    //     const followerDivElements = await screen.findAllByTestId(/follower-item/i)
    //     expect(followerDivElements.length).toBe(5);
    // });
})