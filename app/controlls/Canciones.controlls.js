import { Canciones } from "../models/index.js"


// funcion traer todos los usuarios

const getAll = async(req, res)=>{
    try {
        let canciones = await Canciones.findAll({
            order: [['id','ASC']],
        });

        res.json({
            message:"Canciones encontrados con éxito",
            canciones
        })
    } catch (error) {
        res.status(500).json({
            message:"Error al intentar acceder a registro de canciones"
        })
    }
};

const getByPk = async (req,res)=>{
    try {
        let id = Number(req.params.id);

        if(isNaN(id)){
           return res.status(400).json({
                message: "Debe proporcionar un id válido"
            });
        };

        let cancion =await Canciones.findByPk(id);

        if(!cancion){
            return res.status(404).json({
                message: `No se encontró registro de canción con id:  ${id}`
            })
        }

        res.json({
            message: `Canción con id: ${id} encontrado con éxito`,
            cancion
        })
    } catch (error) {
        res.status(500).json({
            message:"Error al intentar acceder a registro por id"
        })
    }
};

const getTitleSongs = async (req,res)=>{
    try {
        let titulo = req.params.titulo;
        
        let tituloSong = await Canciones.findOne({
            where:{
                titulo
            }
        });

        if(!tituloSong){
            res.status(404).json({
                message:`No es posible encontrar titulo ${titulo}`
            });
        };
                
        res.status(200).json({
            message: `El tituto ${titulo} de la canción es encontrado con éxito`,
            titulo 
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"Error al intentar acceder a titulo de la canción"
        })
    }
};

const addSong =  async(req,res) =>{
    try {
        let { titulo, artista, tono} = req.body;
        
        if(!titulo || !artista || !tono){
            res.status(404).json({
                message:`Debe ingresar los datos requeridos`
            });
        };

        let cancion = await Canciones.create({titulo,artista,tono})
        
        res.status(200).json({
            message:"Cancion registrada con éxito",
            cancion
        })


    } catch (error) {
        let message;
        if(error?.original.code == "23505"){
            message = "La canción ya se encuntra registrada"
        }

        message == message || "Error al registrar nueva canción";
        res.status(500).json({
            message
        });
    }
};

const updateSong = async (req,res)=>{
    try {
        let {id, titulo, artista, tono}=req.body;
        
        if(!id || !titulo || !artista || !tono){
            res.status(404).json({
                message: "Debe proporcionar los datos necesarios para realizar cambios correspondientes"
            })
        };

        let cancion = await Canciones.findByPk(id);
   

        if(!cancion){
            return send.status(404).json({
                message:`No existe canción registrada con id: ${id}`
            })
        };

        let [rowCount, dataCancion] = await Canciones.update(
            {titulo, artista, tono},
            {
                where:{
                    id
                },
            
                returning:["id","titulo","artista","tono"],
            
            },
         
        );

        res.status(200).json({
            message:"Cancion actualizada con éxito",
            cancion: dataCancion[0],
            registrosAfectados: rowCount
        });


    } catch (error) {
        console.log(error);
    }
};

const deleteSong = async(req,res)=>{
    try {
        let id = Number(req.params.id);

        if(isNaN(id)){
           return res.status(400).json({
                message: "Debe proporcionar un id válido"
            });
        };

        let resultado = await Canciones.destroy({
            where:{
                id
            },
        });

        if(resultado){
            res.status(200).json({
            message: `Canción con id: ${id} eliminada con éxito`,
        })
        }else {
            res.status(404).json({
                message:"no existe en registros la canción que desea eliminar"
            });
        };
        
    } catch (error) {
        res.status(500).json({
            message:"Error al intentar eliminar canción con id"
        })
    }
}

let controlls ={
    getAll,
    getByPk,
    getTitleSongs,
    addSong,
    updateSong,
    deleteSong
}

export default controlls;