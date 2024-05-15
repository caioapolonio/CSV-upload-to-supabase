# CSV Upload to Supabase

This project is an Express.js application that allows users to upload CSV files and store the data into a Supabase database. The application handles CSV parsing and insertion of data into a specified Supabase table.

## Features

- Upload CSV files through a web interface.
- Parse and read CSV files using `csv-parser`.
- Insert parsed data into a Supabase table.
- Simple error handling and logging.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js
- npm (Node package manager)

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/cvmA/csv-upload-to-supabase.git
   cd csv-upload-to-supabase
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory and add your Supabase URL and Anon Key:

   ```env
   SUPABASE_URL=your_supabase_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the application**

   ```bash
   node index.js
   ```

   The application will start on port 3000.

## Usage

1. **Open your browser** and navigate to `http://localhost:3000`.
2. **Upload a CSV file** using the provided form.
3. The server will parse the CSV file and insert the data into the `testeCSV` table in your Supabase database.

## Project Structure

- `app.js`: The main application file.
- `uploads/`: Directory where uploaded CSV files are temporarily stored.
- `.env`: Environment variables file (not included in the repository).

## Dependencies

- `express`: Fast, unopinionated, minimalist web framework for Node.js.
- `fs`: Node.js file system module.
- `path`: Node.js path module.
- `multer`: Node.js middleware for handling `multipart/form-data`, which is primarily used for uploading files.
- `csv-parser`: Streaming CSV parser that aims to follow the RFC 4180 standard.
- `dotenv`: Module to load environment variables from a `.env` file.
- `@supabase/supabase-js`: JavaScript client library for Supabase.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
