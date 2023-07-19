
import mongoose from 'mongoose'
mongoose.connect('mongodb://root:root@mongo:27017/plan-store',
{
    authSource: 'admin'
});

const db = mongoose.connection

db.on('error', (err) => {
    console.log('Connection error: ' + err)
})

db.on('disconnected', () => {
    console.log('Database disconnected')
})

db.on('connected', () => {
    console.log('Database connected')
})
