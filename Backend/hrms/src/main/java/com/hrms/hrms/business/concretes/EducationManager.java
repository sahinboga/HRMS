package com.hrms.hrms.business.concretes;

import java.util.Calendar;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.hrms.hrms.business.abstracts.EducationService;
import com.hrms.hrms.core.utilities.result.DataResult;
import com.hrms.hrms.core.utilities.result.ErrorDataResult;
import com.hrms.hrms.core.utilities.result.Result;
import com.hrms.hrms.core.utilities.result.SuccessDataResult;
import com.hrms.hrms.core.utilities.result.SuccessResult;
import com.hrms.hrms.dataAccess.abstracts.EducationDao;
import com.hrms.hrms.entities.concretes.Education;
import com.hrms.hrms.entities.concretes.Resume;

@Service
public class EducationManager implements EducationService{
	
	private EducationDao educationDao;
	
	@Autowired
	public EducationManager(EducationDao educationDao) {
		super();
		this.educationDao = educationDao;
	}

	@Override
	public DataResult<List<Education>> getAll() throws Exception {
		// TODO Auto-generated method stub
		return new SuccessDataResult<List<Education>>(this.educationDao.findAll(),"Eğitim listelendi");
	}

	@Override
	public DataResult<Education> add(Education education) throws Exception {
		
		education.setGraduationDate(GraduationControl(education.getGraduationDate()));
		
		if(education.getStartingDate() < 1950) {
			return new ErrorDataResult<Education>("Başlanğıç yılı en düşük 1950 olabilir.");
		}
		int currentYear = Calendar.getInstance().get(Calendar.YEAR);
		if(education.getStartingDate() > currentYear) {
			return new ErrorDataResult<Education>("Başlangıç yılı hatalı. Başlangıç yılı en fazla " + currentYear + " olabilir.");
		}
		
		if(education.getGraduationDate() <= education.getStartingDate()) {
			return new ErrorDataResult<Education>("Mezuniyet tarihi başlangıç tarihinden düşük veya eşit olamaz.");
		}
		
		if(education.getGraduationDate() > currentYear + 6) {
			return new ErrorDataResult<Education>("Mezuniyet yılı en fazla " + currentYear + 6 + " olabilir.");
		}
		
		
		this.educationDao.save(education);
		return new SuccessDataResult<Education>("Eğitim eklendi!");
	}
	
	private int GraduationControl(int graduation) {
		if(graduation == 0) {
			graduation = 3000; //Frontendde de aynı değeri ver.
		}
		return graduation;
	}

	@Override
	public Result delete(Education entity) throws Exception {
		this.educationDao.delete(entity);
		return new SuccessResult("Eğitim silindi");
	}

	@Override
	public DataResult<Education> update(Education entity) throws Exception {
		Education current=this.educationDao.getById(entity.getEducationId());
		if(current==null) {
			new ErrorDataResult<Education>("Eğitim bulunamadı");
		}
		
		entity.setResume(new Resume());
		entity.getResume().setResumeId(current.getResume().getResumeId());
		this.educationDao.save(entity);
		return new SuccessDataResult<Education>(null,"Eğitim güncellendi");
	}

	@Override
	public DataResult<List<Education>> getAllSorted() {
		Sort sort=Sort.by(Sort.Direction.DESC,"graduationDate");
		return new SuccessDataResult<List<Education>>(this.educationDao.findAll(sort),"Eğitim tarihe göre sıralandı");
	}


}
