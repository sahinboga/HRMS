package com.hrms.hrms.business.adapters.abstracts;

import java.io.IOException;
import java.util.Map;

import org.springframework.web.multipart.MultipartFile;

public interface ImageService {
	Map upload(MultipartFile file,String folderName) throws IOException;
	public void delete(int id) throws IOException;
}
