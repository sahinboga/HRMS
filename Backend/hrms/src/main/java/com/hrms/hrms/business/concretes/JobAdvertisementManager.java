package com.hrms.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.hrms.hrms.business.abstracts.JobAdvertisementService;
import com.hrms.hrms.core.utilities.result.DataResult;
import com.hrms.hrms.core.utilities.result.Result;
import com.hrms.hrms.core.utilities.result.SuccessDataResult;
import com.hrms.hrms.core.utilities.security.JobAdvertFilter;
import com.hrms.hrms.dataAccess.abstracts.JobAdvertisementDao;
import com.hrms.hrms.entities.concretes.JobAdvertisement;
@Service
public class JobAdvertisementManager implements JobAdvertisementService{
	
	private JobAdvertisementDao jobAdvertisementDao;
	
	@Autowired
	public JobAdvertisementManager(JobAdvertisementDao jobAdvertisementDao) {
		super();
		this.jobAdvertisementDao = jobAdvertisementDao;
	}

	@Override
	public DataResult<List<JobAdvertisement>> getAll() throws Exception {
		// TODO Auto-generated method stub
		return new SuccessDataResult<List<JobAdvertisement>>(this.jobAdvertisementDao.findAll(),"İş ilanları listelendi");
	}

	@Override
	public DataResult<JobAdvertisement> add(JobAdvertisement jobAdvertisement) throws Exception {
		JobAdvertisement jobAdvert=this.jobAdvertisementDao.save(jobAdvertisement);
		return new SuccessDataResult<JobAdvertisement>(jobAdvert,"İş ilanı eklendi");
	}

	@Override
	public Result delete(JobAdvertisement entity) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public DataResult<JobAdvertisement> update(JobAdvertisement entity) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public DataResult<List<JobAdvertisement>> getByIsActive(boolean isActive) throws Exception{
		
		List<JobAdvertisement> activeJobAdList=this.jobAdvertisementDao.getByIsActive(isActive);
		
		return new SuccessDataResult<List<JobAdvertisement>>(activeJobAdList,"Aktif iş ilanları listlendi");
	}

	@Override
	public DataResult<List<JobAdvertisement>> getByIsActiveAndEmployer_Id(boolean isActive, int employerId) throws Exception {
		
		return new SuccessDataResult<List<JobAdvertisement>>(this.jobAdvertisementDao.getByIsActiveAndEmployer_Id(isActive, employerId),"Listelendi");
	}

	@Override
	public DataResult<JobAdvertisement> passiveJobAdvertisement(int jobAdvertisementId, boolean active) throws Exception {
		
		JobAdvertisement current=jobAdvertisementDao.getById(jobAdvertisementId);
		current.setActive(active);
		return new SuccessDataResult<JobAdvertisement>(this.jobAdvertisementDao.save(current),"İlan pasif hele getirildi");
	}

	@Override
	public DataResult<JobAdvertisement> getJobAdvertisementById(int id) throws Exception {
		
		JobAdvertisement jobAdvertisement=this.jobAdvertisementDao.getJobAdvertisementById(id);
		return new SuccessDataResult<JobAdvertisement>(jobAdvertisement,"İş ilanı getirildi");
	}

	@Override
	public DataResult<List<JobAdvertisement>> getAllFilterAndPage(int pageNo, int pageSize,JobAdvertFilter jobAdvertFilter) throws Exception {
		Pageable pageable=PageRequest.of(pageNo-1, pageSize);
		
		
		Page<JobAdvertisement> jobAdvertisement=this.jobAdvertisementDao.getFilteringAndPage(jobAdvertFilter, pageable);
		return new SuccessDataResult<List<JobAdvertisement>>(jobAdvertisement.getContent(),jobAdvertisement.getTotalElements()+"");
	}

}
