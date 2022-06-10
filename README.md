# Run migrations

Run migrations.sql file on mysql workbench

# Install dependencies

Run 'npm i'

# Start Project

Run 'npm start'

# Routes

## Get all urls

GET /urls

## Shorten a url

POST /shorten

body: {
"url": "" // some url
}

## Hit short url

Copy and paste the response url of above route into browser and it will redirect to the original url
