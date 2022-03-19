package com.hrms.hrms.business.concretes;

import java.io.IOException;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.hrms.hrms.business.adapters.abstracts.ImageService;
import com.hrms.hrms.core.utilities.helpers.DateHelper;
import com.hrms.hrms.core.utilities.result.DataResult;
import com.hrms.hrms.core.utilities.result.ErrorDataResult;
import com.hrms.hrms.core.utilities.result.ErrorResult;
import com.hrms.hrms.core.utilities.result.Result;
import com.hrms.hrms.core.utilities.result.SuccessDataResult;
import com.hrms.hrms.core.utilities.result.SuccessResult;
import com.hrms.hrms.dataAccess.abstracts.ImageDao;
import com.hrms.hrms.entities.concretes.Image;

@Service
public class ImageManager implements com.hrms.hrms.business.abstracts.ImageService{
	
	ImageDao imageDao;
	ImageService imageService;

	public ImageManager(ImageDao imageDao,ImageService imageService) {
		super();
		this.imageDao = imageDao;
		this.imageService=imageService;
	}

	@Override
	public DataResult<Image> UploadImage(MultipartFile imageFile,String folderName){
		Map result = null;
		try {
			result = imageService.upload(imageFile, folderName);
		} catch (IOException e1) {
			// TODO Auto-generated
		}
		if(result != null) {
			try {
				
				Image image = new Image();
				image.setImagePath(result.get("url").toString());
				image.setImageName(result.get("original_filename").toString());
				image.setCreatedAt(DateHelper.GetDateTime());
				Image img=imageDao.save(image);
				return new SuccessDataResult<Image>(img,"Fotoğraf yüklendi");
			} catch(Exception e) {
				return new ErrorDataResult<Image>("Fotoğraf yüklenirken hata oluştu");
			}
		}
		return new ErrorDataResult<Image>("Servis hatası");
	}

	@Override
	public DataResult<Image> getImage(int id) throws IOException {
		// TODO Auto-generated method stub
		return new SuccessDataResult<Image>(this.imageDao.getById(id));
	}

	@Override
	public void deleteImage(int id) throws IOException {
		
		this.imageService.delete(id);
		
	}

}
