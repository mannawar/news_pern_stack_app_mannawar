CREATE DATABASE newsfeeds;

-- CREATE TABLE newnews(
--   n_id SERIAL PRIMARY KEY,
--   title VARCHAR(255),
--   description VARCHAR(255),  
--   image VARCHAR(255)
-- );

CREATE TABLE user1(
  user_id UUID DEFAULT uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(255) NOT NULL,
  PRIMARY KEY (user_id)
);

CREATE TABLE newslistings(
  news_id SERIAL,
  user_id UUID,
  title VARCHAR(255),
  description VARCHAR(255),  
  image VARCHAR(255),
  PRIMARY KEY (news_id),
  FOREIGN KEY (user_id) REFERENCES user1(user_id)
);



--insert users
INSERT INTO users (user_name, user_email, user_password) VALUES ('Mannawar', 'mannawar@gmail.com', 'secret');

-- CREATE TABLE todo(
--   todo_id SERIAL,
--   user_id UUID ,
--   description VARCHAR(255),
--   PRIMARY KEY (todo_id),
--   FOREIGN KEY (user_id) REFERENCES users(user_id)
-- );


-- CREATE DATABASE authtodolist;

--users

-- CREATE TABLE users(
--   user_id UUID DEFAULT uuid_generate_v4(),
--   user_name VARCHAR(255) NOT NULL,
--   user_email VARCHAR(255) NOT NULL UNIQUE,
--   user_password VARCHAR(255) NOT NULL,
--   PRIMARY KEY (user_id)
-- );

--todos

-- CREATE TABLE todos(
--   todo_id SERIAL,
--   user_id UUID,
--   description VARCHAR(255) NOT NULL,
--   PRIMARY KEY (todo_id),
--   FOREIGN KEY (user_id) REFERENCES users(user_id)
-- );

--fake users data

-- insert into users (user_name, user_email, user_password) values ('Jacob', 'jacob@gmail.com', 'kthl8822');

-- --fake todos data

-- insert into todos (user_id, description) values ('60dc16dd-c7f1-4fde-827a-90c0e101555c', 'clean room');