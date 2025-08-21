const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const USER_FILE = path.join(__dirname, "../data/user.json");


const userList = () => {
  if (!fs.existsSync(USER_FILE)) {
    fs.writeFileSync(USER_FILE, "[]");
  }
  const user = fs.readFileSync(USER_FILE);
  return JSON.parse(user);
};

const writeFileSync = (user) => {
    fs.writeFileSync(USER_FILE, JSON.stringify(user));
}

const sortUserList = (key, order, userList) => {
  if (order === -1) {
    return userList.sort((a, b) => b[key] - a[key]);
  }
  return userList.sort((a, b) => a[key] - b[key]);
};

const fetchUserList = (query) => {
  try {
    let user = userList();
    const { name, createAt, updatedAt, clientId } = query;

    if (name) {
      user = sortUserList("name", name, user);
    }

    if (createAt) {
      user = sortUserList("createAt", createAt, user);
    }

    if (updatedAt) {
      user = sortUserList("updatedAt", updatedAt, user);
    }

    if (clientId) {
      user = sortUserList("clientId", clientId, user);
    }

    return user;
  } catch (error) {
    throw error;
  }
};

const createUser = (user) => {
    try {
        const userList = userList();
        user.id = uuidv4();
        userList.push(user);
        writeFileSync(userList);
        return user;
    } catch (error) {
        throw error;
    }
}

module.exports = {
  fetchUserList,
  createUser,
};
