import "./styles.css";
import { useState } from "react";

import { AmityUiKitProvider, AmityUiKitSocial } from "@amityco/ui-kit";

import Login from "./Login";

const apiKey = "b0ede0093a88f56545318f15060c47ded40b8ae7ee316924";

export default function App() {
    const [UID, setUID] = useState();

    return (
        <div className="App">
            {!UID ? (
                <Login onSubmit={setUID} />
            ) : (
                <AmityUiKitProvider
                    key={UID}
                    apiKey={apiKey}
                    userId={UID}
                    displayName={UID}
                    >
                        <AmityUiKitSocial />
                    </AmityUiKitProvider>
            )
            }
        </div>
    )

}