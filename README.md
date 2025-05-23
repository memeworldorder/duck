## API Documentation

The Duck Race backend exposes a set of RESTful API endpoints for web, Telegram, Discord, and other integrations. All endpoints return JSON and use standard HTTP status codes.

### **Participant Endpoints**

#### `POST /api/join`
Join the current raffle as a participant (web, Telegram, Discord, etc.).
- **Request Body:**
  ```json
  { "id": "string", "name": "string" }
  ```
- **Response:**
  ```json
  { "duckNumber": 1 }
  ```
- **Errors:** `{ "error": "Missing id or name" }`

---

### **Admin Endpoints**

#### `POST /api/admin-start`
Start a new raffle. Returns the new raffle info.
- **Response:**
  ```json
  { "id": "string", "createdAt": "ISO8601", ... }
  ```

#### `POST /api/admin-end`
End the current raffle and pick a winner.
- **Request Body:**
  ```json
  { "winnerDuckNumber": 1 }
  ```
- **Response:**
  ```json
  { "id": "string", "endedAt": "ISO8601", ... }
  ```
- **Errors:** `{ "error": "Missing or invalid winnerDuckNumber" }`

#### `POST /api/admin-reset`
Reset all raffles and participants.
- **Response:** `{ "success": true }`

#### `GET /api/admin-export`
Export all raffles, participants, and results as a JSON file.
- **Response:** JSON file download

#### `GET /api/admin-raffles`
List all raffles with participants and winner info.
- **Response:**
  ```json
  [
    {
      "id": "string",
      "startedAt": "ISO8601",
      "finishedAt": "ISO8601|null",
      "winnerDuckNumber": 1,
      "participants": [
        { "id": "string", "name": "string", "duckNumber": 1 }
      ]
    }
  ]
  ```

#### `GET /api/admin-participants`
List all current participants in the active raffle.
- **Response:**
  ```json
  [
    { "id": "string", "name": "string", "duckNumber": 1 }
  ]
  ```

---

### **Integration Notes**
- All endpoints are accessible via HTTP(S) and return JSON.
- For Telegram/Discord bots, simply make HTTP requests to these endpoints.
- For admin endpoints, consider adding authentication (API key, JWT, etc.) for production use.
- See the codebase for more advanced usage and error handling.

--- #   d u c k  
 