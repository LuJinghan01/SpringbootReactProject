import React, { useState, useEffect } from 'react';
import { Button, Table } from 'antd';
import JobDataService from "../jobs.service";
import "../styles.css";

const JobsList = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterId, setFilterId] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    retrieveJobs();
  }, []);

  const retrieveJobs = () => {
    JobDataService.getAll()
      .then(response => {
        setJobs(response.data);
        setFilteredJobs(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  const deleteJob = (jobId) => {
    JobDataService.deleteJob(jobId)
      .then(response => {
        console.log(response.data);
        retrieveJobs();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const start = () => {
    setLoading(true);
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const columns = [
    {
      title: 'Job ID',
      dataIndex: 'id',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'Creation Time',
      dataIndex: 'creationTime',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: 'User Name',
      dataIndex: 'username',
    },
    {
      title: 'Actions',
      render: (_, record) => (
        <Button
          type="danger"
          onClick={() => deleteJob(record.id)}
        >
          Remove
        </Button>
      ),
    },
  ];

  const hasSelected = selectedRowKeys.length > 0;

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilterId(value);

    if (value === '') {
      setFilteredJobs(jobs);
    } else {
      const filtered = jobs.filter(job => job.id.toString() === value);
      setFilteredJobs(filtered.length > 0 ? filtered : jobs);
    }
  };

  const removeAllJobs = () => {
    JobDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        retrieveJobs();
      })
      .catch(e => {
        console.log(e);
      });
  };

  

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
          Reload
        </Button>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>
      <input
        type="text"
        value={filterId}
        onChange={handleFilterChange}
        placeholder="Enter Job ID"
      />
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={filteredJobs}
        showSorterTooltip={{ title: 'Sort' }}
        rowKey="id"
      />
      <div style={{ marginBottom: 16 }}>
        <Button type="primary"
          className="m-3"
          type="danger"
          onClick={removeAllJobs}
        >
          Remove All
        </Button>
      </div>

    </div>
  );
};

export default JobsList;

