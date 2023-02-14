import React from "react";
import './Widgets.css';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";


function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>
            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="elonmusk"
                    options={{ height: 800 }}
                />

                <TwitterShareButton
                    url={"https://facebook.com/kunaldhongade99"}
                    options={{ text: "Welcome to my New World", via: "KunalDhongade" }}
                />
            </div>
        </div>
    );
}

export default Widgets;