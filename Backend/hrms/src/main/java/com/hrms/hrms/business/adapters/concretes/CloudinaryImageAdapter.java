package com.hrms.hrms.business.adapters.concretes;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.hrms.hrms.business.adapters.abstracts.ImageService;

@Service
public class CloudinaryImageAdapter implements ImageService{
	
	Cloudinary cloudinary;
	
	@Autowired
	public CloudinaryImageAdapter() {
		super();
		this.cloudinary = new Cloudinary("cloudinary://477673447652432:Hu8cS6_3Cx6X3tSQuSQHbWqoeCs@ankara-niversitesi");
	}

	@Override
	public Map upload(MultipartFile imageFile, String folderName) throws IOException {
		try {
			File file = new File(imageFile.getOriginalFilename());
			FileOutputStream fos = new FileOutputStream(file);
			fos.write(imageFile.getBytes());
			fos.close();
			String folder = "Hrms/"+folderName;
			Map result = cloudinary.uploader().upload(file, ObjectUtils.asMap("folder", folder));
			file.delete();
			return result;
		} catch(Exception e) {
			
		}
		
		return null;
	}

	@Override
	public void delete(int id) throws IOException {
		// TODO Auto-generated method stub
		cloudinary.uploader().destroy(id+"",ObjectUtils.emptyMap());
	}

}
