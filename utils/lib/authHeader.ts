interface User {
  token?: string;
}

const authHeader = (): { Authorization?: string } | {} => {
  // return authorization header with JWT(JSON Web Token) token
  let user: User = JSON.parse(localStorage.getItem("SITE_DATA_AUTH") || "{}");

  if (user && user.token) {
    return { Authorization: "Bearer " + user.token };
  } else {
    return {};
  }
};

export default authHeader;
