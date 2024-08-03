import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())


//Rota para Criação de um usuário:
app.post('/usuarios', async (req, res) => {
    try {
        await prisma.user.create({
            data: {
                email: req.body.email,
                name: req.body.name,
                age: req.body.age
            }
        })
        res.status(201).json(req.body)

    } catch (err) {
        res.status(500).json({ message: "Erro do servidor." })
    }

})


//Rota para Listagem de usuários:
app.get('/usuarios', async (req, res) => {
    try {
        const users = await prisma.user.findMany()

        res.status(200).json(users)

    } catch (err) {
        res.status(500).json({ message: "Erro do servidor." })
    }

})

//Rota para Edição de um usuário:
app.put('/usuarios/:id', async (req, res) => {
    try {
        await prisma.user.update({
            where: {
                id: req.params.id
            },
            data: {
                email: req.body.email,
                name: req.body.name,
                age: req.body.age
            }
        })
        res.status(201).json(req.body)

    } catch (err) {
        res.status(500).json({ message: "Erro do servidor." })
    }

})

//Rota para Deletar usuário:

app.delete('/usuarios/:id', async (req, res) => {
    try {
        await prisma.user.delete({
            where: {
                id: req.params.id
            }
        })

        res.status(200).json({ message: "Foi sal." })

    } catch (err) {
        res.status(500).json({ message: "Erro do servidor." })
    }

})

app.listen(3000)