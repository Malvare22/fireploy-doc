# Bases de datos

Fireploy soporta los siguientes motores de bases de datos:

- MySQL
- PostresSQL
- MariaDB
- MongoBD

Como se menciona en el apartado [configuraciones esenciales](/docs/proyecto/configuraciones-esenciales.md), existen unas variables de entorno especiales orientadas a las bases de datos. Se debe realizar el llamado de dichas variables en sus campos pertinentes.

### Ejemplo bases de datos MongoDB

```

package Red;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;
import io.github.cdimascio.dotenv.Dotenv;

/**
 * Clase para conexión a MongoDB usando patrón Singleton.
 */
public class BaseDeDatos {

    private static final Dotenv dotenv = Dotenv.configure().load();

    private static final String MONGO_URI = dotenv.get("DB_CONNECTION_URI");
    private static final String MONGO_DB_NAME = "test";

    private static MongoClient mongoClient;
    private static MongoDatabase mongoDatabase;

    public static MongoClient getMongoClient() {
        if (mongoClient == null) {
            mongoClient = MongoClients.create(MONGO_URI);
        }
        return mongoClient;
    }

    public static MongoDatabase getMongoDatabase() {
        if (mongoDatabase == null) {
            mongoDatabase = getMongoClient().getDatabase(MONGO_DB_NAME);
        }
        return mongoDatabase;
    }

    public static void close() {
        if (mongoClient != null) {
            mongoClient.close();
            mongoClient = null;
            mongoDatabase = null;
        }
    }
}

```

### Ejemplo bases de datos SQL (PostgreSQL)

```clike

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnection {

    public static void main(String[] args) {
        String dbHost = System.getenv("DB_HOST");
        String dbPort = System.getenv("DB_PORT");
        String dbName = System.getenv("DB_DATABASE");
        String dbUser = System.getenv("DB_USER");
        String dbPassword = System.getenv("DB_PASSWORD");

        String jdbcUrl = "jdbc:postgresql://" + dbHost + ":" + dbPort + "/" + dbName;

        try {
            Connection conn = DriverManager.getConnection(jdbcUrl, dbUser, dbPassword);
            System.out.println("✅ Conexión exitosa a la base de datos");
            conn.close();
        } catch (SQLException e) {
            System.out.println("❌ Error al conectar con la base de datos");
            e.printStackTrace();
        }
    }
}


```