package com.hrms.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hrms.hrms.business.abstracts.ResumeService;
import com.hrms.hrms.core.utilities.result.DataResult;
import com.hrms.hrms.core.utilities.result.Result;
import com.hrms.hrms.core.utilities.result.SuccessDataResult;
import com.hrms.hrms.dataAccess.abstracts.ResumeDao;
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
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public DataResult<Resume> getResumeByResumeId(int resumeId) {
		
		return new SuccessDataResult<Resume>(this.resumeDao.getResumeByResumeId(resumeId),"Cv görüntülendi");
	}

}
