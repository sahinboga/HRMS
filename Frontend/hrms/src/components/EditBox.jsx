
import React, { useEffect, useState } from 'react'
import { Button } from 'semantic-ui-react'


export default function EditBox({children,saveClick,editClick,deleteClick}) {

    const [isEdit, setIsEdit] = useState(false)
    const [isNew, setIsNew] = useState(false)
    
    useEffect(() => {
        
    }, [isEdit])

    const handleEditClick = () => {
        setIsEdit(true)
        if(editClick){
            editClick()
        }

    }

    const handleSaveClick=()=>{
        if(saveClick){

            const isSave= saveClick()
            if(isSave){
                setIsEdit(false)
            }
        }
    }

    const handleCancelEdit=()=>{
        setIsEdit(false)
        //setIsNew(false)
    }

    const handleDeleteClick=()=>{
        setIsEdit(false)
        setIsNew(false)
       if(deleteClick){
           deleteClick()
           
       } 
       
    }


    return (
        <>
            {
                isEdit
                    ?
                    (<>
                        {children[0]}
                        <div className="d-flex justify-content-between">
                            <div className="my-2">
                                <Button type="submit" positive onClick={()=>handleSaveClick()}>Kaydet</Button>
                                <Button negative onClick={() => handleCancelEdit()}>Vazgeç</Button>
                            </div>
                            {
                                !isNew
                                    ?
                                    <div className="mt-2">
                                        <Button negative type="button" onClick={() => handleDeleteClick()}>Sil</Button>
                                    </div>
                                    : null
                            }
                        </div>

                    </>)
                    : 
                    <div className="message-content" onClick={() => handleEditClick()}>

                        {children[1]}
                    </div>
            }
        </>
    )
}
