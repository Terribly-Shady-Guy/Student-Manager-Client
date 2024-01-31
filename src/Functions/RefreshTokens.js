export function setRefreshInterval() {
    return setInterval(() => {
        const token = window.localStorage.getItem("accessToken");
        refreshTokens(token);
    }, 5 * 1000 * 60);
}

export function refreshTokens(token) {
    if (token === null) {
        return;
    }

    fetch("http://localhost:5119/api/authentication/refreshtokens", {
        method: "POST",
        credentials: "include",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(token)
    })
    .then((response) => response.ok ? response.text() : "")
    .then((data) => {
        if (data !== "") {
            window.localStorage.setItem("accessToken", data)
        }
    });
}