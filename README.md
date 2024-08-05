<h1>Node API</h1>
<p>Test API for studying API creation, using the Express and Prisma libraries, with MongoDB for the database.</p>

<h2>Requirements:</h2>
<ul>
<li>Node.js installed on the machine.</li>
<li>Accessing a MongoDB 4.2 server+</li>
</ul>

<h2>Installation:</h2>

<p>To use the API, initialize a Node.js project, install express and add the Prisma CLI as a development dependency to it:</p>

```
npm init -y
npm install express
npm install prisma --save-dev
```

<p>This creates a <code>package.json</code> with an initial setup for a Node.js application.

You can now invoke the Prisma CLI using the <code>npx</code> prefix:</p>

```
npx prisma init
```
<p>This command does two things:</p>
<ul>
<li>creates a new directory called <code>prisma</code> that contains a file called <code>schema.prisma</code>, which contains the Prisma schema with your database connection variable and schema models.</li>
<li>creates the <code>.env</code> file in the root directory of the project, which is used for defining environment variables (such as your database connection)</li>
</ul>
