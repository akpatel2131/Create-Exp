const fs = require("fs");
const path = require("path");

const USER_FILE = path.join(__dirname, "../data/user.json");

const readUserListFile = () => {
  if (!fs.existsSync(USER_FILE)) {
    fs.writeFileSync(USER_FILE, "[]", null, 2);
  }
  const user = fs.readFileSync(USER_FILE, "utf-8");
  return JSON.parse(user);
};

const writeFileSync = (user) => {
  fs.writeFileSync(USER_FILE, JSON.stringify(user, null, 2));
};

const sortUserList = (key, order, userList) => {
  return [...userList].sort((a, b) => {
    let valA = a[key];
    let valB = b[key];

    if (valA == null) return order === "desc" ? 1 : -1;
    if (valB == null) return order === "desc" ? -1 : 1;

    if (key === "id") {
      return order === "desc" ? valB - valA : valA - valB;
    }

    if (key === "createdAt" || key === "updatedAt") {
      const dateA = new Date(valA);
      const dateB = new Date(valB);

      return order === "desc" ? dateB - dateA : dateA - dateB;
    }

    return order === "desc"
      ? String(valB).localeCompare(String(valA))
      : String(valA).localeCompare(String(valB));
  });
};

const fetchUserList = (query) => {
  try {
    let user = readUserListFile();
    const { name, createdAt, updatedAt, clientId } = query;

    console.log({ name, createdAt, updatedAt, clientId });

    if (name) {
      user = sortUserList("name", name, user);
    }

    if (createdAt) {
      user = sortUserList("createdAt", createdAt, user);
    }

    if (updatedAt) {
      user = sortUserList("updatedAt", updatedAt, user);
    }

    if (clientId) {
      user = sortUserList("id", clientId, user);
    }

    return user;
  } catch (error) {
    throw error;
  }
};

const createUser = (user) => {
  try {
    const userList = readUserListFile();
    user.id = userList.length + 1;
    user.createdAt = new Date().toISOString();
    user.updatedAt = new Date().toISOString();
    userList.push(user);
    writeFileSync(userList);
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  fetchUserList,
  createUser,
};
