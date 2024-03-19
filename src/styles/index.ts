export const styles = `
  <style>
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .main-title {
      text-align: center;
      font-style: italic;
    }
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
    .list {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
    .item {
      padding: 10px;
      background: aquamarine;
      text-transform: uppercase;
      border-radius: 10px;
    }
    .list-users {
      display: flex;
      flex-direction: column;
      gap: 15px;
      padding: 10px;
    }
    .item-user {
      display: flex;
      justify-content: space-between;
      padding: 10px;
      background: aquamarine;
      border-radius: 5px;
    }
    .item-user-part {
      display: flex;
      align-items: center;
      gap: 5px;
    }
    .title {
      font-size: larger;
      font-style: italic;
    }
    .link {
      text-decoration: auto;
      color: black;
      padding: 5px;
      background: gold;
      border-radius: 5px;
    }
    .link-album {
      background: #fff09f;
    }
  </style>
`;
