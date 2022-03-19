package com.hrms.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hrms.hrms.business.abstracts.ResumeService;
import com.hrms.hrms.core.utilities.result.DataResult;
import com.hrms.hrms.core.utilities.result.ErrorResult;
import com.hrms.hrms.core.utilities.result.Result;
import com.hrms.hrms.core.utilities.result.SuccessDataResult;
import com.hrms.hrms.core.utilities.result.SuccessResult;
import com.hrms.hrms.dataAccess.abstracts.ResumeDao;
import com.hrms.hrms.entities.concretes.Image;
import com.hrms.hrms.entities.concretes.Resume;

@Service
public class ResumeManager implements ResumeService{
	
	private ResumeDao resumeDao;
	
	@Autowired
	public ResumeManager(ResumeDao resumeDao) {
		super();
		this.resumeDao = resumeDao;
	}

	@Override
	public DataResult<List<Resume>> getAll() throws Exception {
		// TODO Auto-generated method stub
		return new SuccessDataResult<List<Resume>>(this.resumeDao.findAll(),"Cv listelendi");
	}

	@Override
	public DataResult<Resume> add(Resume resume) throws Exception {

		this.resumeDao.save(resume);
		return new SuccessDataResult<Resume>("Cv eklendi");
	}

	@Override
	public Result delete(Resume entity) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public DataResult<Resume> update(Resume entity) throws Exception {

		Resume current=this.resumeDao.getById(entity.getResumeId());
		
		current.setAdress(entity.getAdress());
		current.setBirthDate(entity.getBirthDate());
		current.setPhone(entity.getPhone());
		current.setGithub(entity.getGithub());
		current.setLinkedin(entity.getLinkedin());
		this.resumeDao.save(current);
		return new SuccessDataResult<Resume>(null,"güncellendi");
	}

	@Override
	public DataResult<Resume> getResumeByJobSeeker_id(int jsId) {
		
		return new SuccessDataResult<Resume>(this.resumeDao.getResumeByJobSeeker_id(jsId),"Cv görüntülendi");
	}

	@Override
	public Image getUserImage(int id) {

		Resume userResume=this.resumeDao.getById(id);
		return userResume.getImage();
	}

	@Override
	public Result updateResumePhoto(int id, Image image) throws Exception{
		try {
			
			Resume current=this.resumeDao.getResumeByJobSeeker_id(id);
			if(current == null) {
				return new ErrorResult("Cv bulunamadı");
			}
			current.setImage(image);
			this.resumeDao.save(current);
			return new SuccessResult("Fotoğraf Yüklendi");
		}catch(Exception e) {
			return new ErrorResult("Fotoğraf yüklenirken hata oluştu");
		}
	}

	@Override
	public Result deleteResumePhoto(int id) throws Exception{
		
		Resume current=this.resumeDao.getResumeByJobSeeker_id(id);
		if(current == null) {
			return new ErrorResult("Özgeçmiş kaydı bulunamadı.");
		}
		current.setImage(null);
		this.resumeDao.save(current);
		return new SuccessResult("Fotoğraf kaldırıldı.");
	}

}
