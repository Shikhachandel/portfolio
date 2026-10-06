import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

import {
    ExpertiseContent,
    GithubStatsContainer,
    GithubCard,
    GithubValue,
    GithubLabel
} from "./style";

function Expertise() {
    // eslint-disable-next-line
    const [cookies, _] = useCookies(["view"]);

    const [githubData, setGithubData] = useState({
        repos: 0,
        followers: 0,
        following: 0
    });

    useEffect(() => {
        async function getGithubData() {
            try {
                const response = await fetch(
                    "https://api.github.com/users/Shikhachandel"
                );

                const data = await response.json();

                setGithubData({
                    repos: data.public_repos || 0,
                    followers: data.followers || 0,
                    following: data.following || 0
                });
            } catch (error) {
                console.error(error);
            }
        }

        getGithubData();
    }, []);

    return (
        <ExpertiseContent>
            <h1>GitHub Activity</h1>

            <GithubStatsContainer>
                <GithubCard>
                    <GithubValue>
                        {githubData.repos}
                    </GithubValue>
                    <GithubLabel>
                        Repositories
                    </GithubLabel>
                </GithubCard>

                <GithubCard>
                    <GithubValue>
                        {githubData.followers}
                    </GithubValue>
                    <GithubLabel>
                        Followers
                    </GithubLabel>
                </GithubCard>

                <GithubCard>
                    <GithubValue>
                        {githubData.following}
                    </GithubValue>
                    <GithubLabel>
                        Following
                    </GithubLabel>
                </GithubCard>
            </GithubStatsContainer>
        </ExpertiseContent>
    );
}

export default Expertise;