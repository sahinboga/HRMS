package com.hrms.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.hrms.hrms.business.abstracts.FavoriteJobAdvertService;
import com.hrms.hrms.business.abstracts.JobAdvertisementService;
import com.hrms.hrms.core.utilities.result.DataResult;
import com.hrms.hrms.core.utilities.result.ErrorDataResult;
import com.hrms.hrms.core.utilities.result.Result;
import com.hrms.hrms.core.utilities.result.SuccessDataResult;
import com.hrms.hrms.core.utilities.security.JobAdvertFilter;
import com.hrms.hrms.dataAccess.abstracts.JobAdvertisementDao;
import com.hrms.hrms.entities.concretes.JobAdvertisement;
@Service
public class JobAdvertisementManager implements JobAdvertisementService{
	
	private JobAdvertisementDao jobAdvertisementDao;
	private FavoriteJobAdvertService favoriteJobAdvertService;
	
	@Autowired
	public JobAdvertisementManager(JobAdvertisementDao jobAdvertisementDao,FavoriteJobAdvertService favoriteJobAdvertService) {
		super();
		this.jobAdvertisementDao = jobAdvertisementDao;
		this.favoriteJobAdvertService = favoriteJobAdvertService;
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
		JobAdvertisement current=this.jobAdvertisementDao.getById(entity.getId());
		if(current==null) {
			new ErrorDataResult<JobAdvertisement>("İş ilanı bulunamadı");
		}
		current.setCity(entity.getCity());
		current.setCompanySector(entity.getCompanySector());
		current.setWorkType(entity.getWorkType());
		current.setDeadline(entity.getDeadline());
		current.setReleaseDate(entity.getReleaseDate());
		current.setJobPosition(entity.getJobPosition());
		current.setMinSalary(entity.getMinSalary());
		current.setMaxSalary(entity.getMaxSalary());
		current.setMaxPerson(entity.getMaxPerson());
		current.setJobDescription(entity.getJobDescription());
		this.jobAdvertisementDao.save(current);
		return new SuccessDataResult<JobAdvertisement>(null,"İş ilanı güncellendi");
	}

	@Override
	public DataResult<List<JobAdvertisement>> getByIsActive(boolean isActive) throws Exception{
		
		List<JobAdvertisement> activeJobAdList=this.jobAdvertisementDao.getByIsActive(isActive?1:0);
		
		return new SuccessDataResult<List<JobAdvertisement>>(activeJobAdList,"Aktif iş ilanları listlendi");
	}

	@Override
	public DataResult<List<JobAdvertisement>> getByIsActiveAndEmployer_Id(boolean isActive, int employerId) throws Exception {
		
		return new SuccessDataResult<List<JobAdvertisement>>(this.jobAdvertisementDao.getByIsActiveAndEmployer_Id(isActive?1:0, employerId),"Listelendi");
	}

	@Override
	
	public DataResult<JobAdvertisement> passiveJobAdvertisement(int jobAdvertisementId, boolean active) throws Exception {
		
		JobAdvertisement current=jobAdvertisementDao.getById(jobAdvertisementId);
		if(!active) {
			favoriteJobAdvertService.deleteByJobAdvertId(jobAdvertisementId);
		}
		current.setIsActive(active?1:0);
		return new SuccessDataResult<JobAdvertisement>(this.jobAdvertisementDao.save(current),active?"İlan aktif hale getirildi":"İlan pasif hale getirildi");
	}
	
	@Override
	public void updateIsActive(boolean isActive, int id) throws Exception{
		// TODO Auto-generated method stub
		this.jobAdvertisementDao.updateIsActive(id, isActive);
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
