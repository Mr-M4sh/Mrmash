   const app = express();
    const PORT = 5000;

    // Middleware
    app.use(cors()); 
    app.use(bodyParser.json());

    // !! ⭐️ UPDATE THIS URI WITH YOUR MONGODB ATLAS CONNECTION STRING ⭐️ !!
    // Remember to replace <username> and <password> with your actual user/pass.
    const MONGO_URI = 'mongodb+srv://<manish_user>:<your_saved_password>@cluster0.abcde.mongodb.net/manish_portfolio?retryWrites=true&w=majority'; 

    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    // ... (rest of the code)
    ```

    *Now your backend is configured to save data to the cloud!*

---

### Part 2: Pushing to GitHub (Version Control)

GitHub is where you will store and manage your code versions.

**Step 5: Organize Your Files**

Make sure your project structure looks like this:

```
Manish-Portfolio/
├── frontend/
│   └── index.html   (Your main portfolio page)
└── backend/
    ├── server.js    (Your Node.js API)
    ├── package.json
    └── node_modules/ (Will be ignored)
```
For simplicity, you can also just have `index.html` and `server.js` in the main folder for now.

**Step 6: Initialize Git and Create `.gitignore`**

1.  Open your terminal in the main project folder (`Manish-Portfolio/`).
2.  Initialize a Git repository:
    ```bash
    git init
