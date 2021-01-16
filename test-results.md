# Test results

## Before jasmine spec reporter

```sh
> Executing task: npm run test <


> notes@1.0.0 pretest /Users/walmyr/www/notes
> webdriver-manager update

[01:52:02] I/update - chromedriver: file exists /Users/walmyr/www/notes/node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_87.0.4280.88.zip
[01:52:02] I/update - chromedriver: unzipping chromedriver_87.0.4280.88.zip
[01:52:02] I/update - chromedriver: setting permissions to 0755 for /Users/walmyr/www/notes/node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_87.0.4280.88
[01:52:02] I/update - chromedriver: chromedriver_87.0.4280.88 up to date
[01:52:02] I/update - selenium standalone: file exists /Users/walmyr/www/notes/node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.141.59.jar
[01:52:02] I/update - selenium standalone: selenium-server-standalone-3.141.59.jar up to date
[01:52:03] I/update - geckodriver: file exists /Users/walmyr/www/notes/node_modules/protractor/node_modules/webdriver-manager/selenium/geckodriver-v0.29.0.tar.gz
[01:52:03] I/update - geckodriver: unzipping geckodriver-v0.29.0.tar.gz
[01:52:03] I/update - geckodriver: setting permissions to 0755 for /Users/walmyr/www/notes/node_modules/protractor/node_modules/webdriver-manager/selenium/geckodriver-v0.29.0
[01:52:03] I/update - geckodriver: geckodriver-v0.29.0 up to date

> notes@1.0.0 test /Users/walmyr/www/notes
> npm run test:chrome:headless && npm run test:firefox:headless


> notes@1.0.0 test:chrome:headless /Users/walmyr/www/notes
> protractor config/chromeHeadless.conf.js

[01:52:03] I/launcher - Running 1 instances of WebDriver
[01:52:03] I/local - Starting selenium standalone server...
[01:52:04] I/local - Selenium standalone server started at http://192.168.178.17:63057/wd/hub
Started
...........


11 specs, 0 failures
Finished in 16.267 seconds

[01:52:21] I/local - Shutting down selenium standalone server.
[01:52:21] I/launcher - 0 instance(s) of WebDriver still running
[01:52:21] I/launcher - chrome #01 passed

> notes@1.0.0 test:firefox:headless /Users/walmyr/www/notes
> protractor config/firefoxHeadless.conf.js

[01:52:22] I/launcher - Running 1 instances of WebDriver
[01:52:22] I/local - Starting selenium standalone server...
[01:52:22] I/local - Selenium standalone server started at http://192.168.178.17:58315/wd/hub
Started
...........


11 specs, 0 failures
Finished in 22.188 seconds

[01:52:48] I/local - Shutting down selenium standalone server.
[01:52:48] I/launcher - 0 instance(s) of WebDriver still running
[01:52:48] I/launcher - firefox #01 passeds
```

## After jasmine spec reporters

```sh
> notes@1.0.0 pretest /Users/walmyr/www/notes
> webdriver-manager update

[02:58:16] I/update - chromedriver: file exists /Users/walmyr/www/notes/node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_87.0.4280.88.zip
[02:58:16] I/update - chromedriver: unzipping chromedriver_87.0.4280.88.zip
[02:58:16] I/update - chromedriver: setting permissions to 0755 for /Users/walmyr/www/notes/node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_87.0.4280.88
[02:58:16] I/update - chromedriver: chromedriver_87.0.4280.88 up to date
[02:58:16] I/update - selenium standalone: file exists /Users/walmyr/www/notes/node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.141.59.jar
[02:58:16] I/update - selenium standalone: selenium-server-standalone-3.141.59.jar up to date
[02:58:16] I/update - geckodriver: file exists /Users/walmyr/www/notes/node_modules/protractor/node_modules/webdriver-manager/selenium/geckodriver-v0.29.0.tar.gz
[02:58:16] I/update - geckodriver: unzipping geckodriver-v0.29.0.tar.gz
[02:58:16] I/update - geckodriver: setting permissions to 0755 for /Users/walmyr/www/notes/node_modules/protractor/node_modules/webdriver-manager/selenium/geckodriver-v0.29.0
[02:58:16] I/update - geckodriver: geckodriver-v0.29.0 up to date

> notes@1.0.0 test /Users/walmyr/www/notes
> npm run test:chrome:headless && npm run test:firefox:headless


> notes@1.0.0 test:chrome:headless /Users/walmyr/www/notes
> protractor config/chromeHeadless.conf.js

[02:58:17] I/launcher - Running 1 instances of WebDriver
[02:58:17] I/local - Starting selenium standalone server...
[02:58:18] I/local - Selenium standalone server started at http://192.168.178.17:49220/wd/hub
Started
Jasmine started
.
  HomePage as an anonymous user
    ✓ renders a navbar with links; and a heading, a paragraph, and two buttons, in the main page

.  CRUD
    ✓ creates, reads, edits, and deletes a note successfully

.  Login page

    Login button verifications
      ✓ starts disabled
.      ✓ is kept disabled when filling only the email field
.      ✓ is kept disabled when filling only the password field

.    Errors
      ✓ fails when trying to login with an invalid password
.      ✓ fails when trying to login with an unnexistent user

.    ✓ logs in and out successfully

.  Mobile viewport

    Anonymous
      ✓ correctly shows (and hides) elements when toggling/untoggling the navbar

.    Logged in
      ✓ correctly shows (and hides) elements when toggling/untoggling the navbar

.  Redirect
    ✓ corretly redirects after login




11 specs, 0 failures
Finished in 26.427 seconds

Executed 10 of 10 specs SUCCESS in 16 secs.
[02:58:36] I/local - Shutting down selenium standalone server.
[02:58:36] I/launcher - 0 instance(s) of WebDriver still running
[02:58:36] I/launcher - chrome #01 passed

> notes@1.0.0 test:firefox:headless /Users/walmyr/www/notes
> protractor config/firefoxHeadless.conf.js

[02:58:37] I/launcher - Running 1 instances of WebDriver
[02:58:37] I/local - Starting selenium standalone server...
[02:58:37] I/local - Selenium standalone server started at http://192.168.178.17:64625/wd/hub
Started
Jasmine started
.
  HomePage as an anonymous user
    ✓ renders a navbar with links; and a heading, a paragraph, and two buttons, in the main page

.  CRUD
    ✓ creates, reads, edits, and deletes a note successfully

.  Login page

    Login button verifications
      ✓ starts disabled
.      ✓ is kept disabled when filling only the email field
.      ✓ is kept disabled when filling only the password field

.    Errors
      ✓ fails when trying to login with an invalid password
.      ✓ fails when trying to login with an unnexistent user

.    ✓ logs in and out successfully

.  Mobile viewport

    Anonymous
      ✓ correctly shows (and hides) elements when toggling/untoggling the navbar

.    Logged in
      ✓ correctly shows (and hides) elements when toggling/untoggling the navbar

.  Redirect
    ✓ corretly redirects after login




11 specs, 0 failures
Finished in 26.427 seconds

Executed 10 of 10 specs SUCCESS in 21 secs.
[02:59:01] I/local - Shutting down selenium standalone server.
[02:59:01] I/launcher - 0 instance(s) of WebDriver still running
[02:59:01] I/launcher - firefox #01 passed
```
