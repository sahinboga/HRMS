package com.hrms.hrms.business.abstracts;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

import com.hrms.hrms.core.utilities.result.DataResult;
import com.hrms.hrms.core.utilities.result.Result;
import com.hrms.hrms.entities.concretes.Image;

public interface ImageService {
	
	public DataResult<Image> UploadImage(MultipartFile imageFile,String folderName) ;
	public DataResult<Image> getImage(int id) throws IOException ;
	public void deleteImage(int id) throws IOException;
}
