import Swal from "sweetalert2"

export const DeleteAlert=(header,callBack)=>{
    Swal.fire({
        title: 'Emin misin?',
        text: "Bu işlemi geri alamazsın!",
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText:"İptal",
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Evet, sil!'
      }).then((result) => {
        if (result.isConfirmed) {
            callBack().then(result=>{

                Swal.fire(
                  'Silindi!',
                  header+" silindi.",
                  'success'
                )
            })
        }
      })
}