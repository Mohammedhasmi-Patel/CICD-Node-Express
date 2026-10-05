import express from "express"

const app = express();

const PORT = process.env.PORT ?? 8080;

app.get("/",(req,res)=>{
    res.json({
        success : true,
        message:"Hello from server"
    });
})

app.listen(PORT,()=>{
    console.log(`server listening at ${PORT}`);
})