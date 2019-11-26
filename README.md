# JSA-Emerald

## Wiki

- [Main page](https://github.com/green-fox-academy/jsa-shenzhen-2019-syllabus/tree/master/teaching-materials/project-phase)
- [Jira space](https://jira.greenfox.academy/secure/RapidBoard.jspa?rapidView=183&projectKey=JSAE&view=planning&selectedIssue=JSAE-71&issueLimit=100)
- [App Mock-up](https://app.moqups.com/IGierD7N0L/view/page/a2680404d)

---

## Commit message conventions

1. The commit message starts with story id, and it should answer what has done with this commit, for instance, `JSAE-71: add .gitignore`. And more detailed information should be in the body of this commit message starting with `--`.

---

## NOTES:

1. ESLint in root folder, and `npm` is used for that. Therefore, to run `lint` or `lint-fix` should be in the root folder.
2. BE: use `npm ONLY`.
3. FE: use `yarn ONLY`.
4. BE: In db service, we use db **connection pool** instead of a **regular db connetion**, codes as follows in [this file](./back-end/services/dbService.js):

```javascript
this.pool = mysql.createPool(process.env.MYSQL_URL)
```

therefore, `MYSQL_URL` is needed in the .env file as follows:

```txt
MYSQL_URL=mysql://{yourUserName}:{yourPassword}@localhost:{port}/{databaseName}
```

---

## Swagger (API specification)

https://green-fox-academy.github.io/JSA-Emerald-Shenzhen/
