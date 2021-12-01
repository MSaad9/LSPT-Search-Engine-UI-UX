import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions as searchActions } from '../../store/SearchData/slice';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, InputGroup, Input, Label } from 'reactstrap';
import './FilterModal.css';
import { selectSearchData } from '../../store/SearchData/selectors';

export function FilterModal() {
    let [modalOpen, setModalOpen] = useState<boolean>(false);
    let searchData = useSelector(selectSearchData);
    let [amazonChecked, setAmazonChecked] = useState<boolean>(searchData.siteFilters.includes("amazon"));
    let [githubChecked, setGithubChecked] = useState<boolean>(searchData.siteFilters.includes("github"));
    let [redditChecked, setRedditChecked] = useState<boolean>(searchData.siteFilters.includes("reddit"));
    let [wikiChecked, setWikiChecked] = useState<boolean>(searchData.siteFilters.includes("wikipedia"));
    let dispatch = useDispatch();

    useEffect(() => {
        setAmazonChecked(searchData.siteFilters.includes("amazon"));
        setGithubChecked(searchData.siteFilters.includes("github"));
        setRedditChecked(searchData.siteFilters.includes("reddit"));
        setWikiChecked(searchData.siteFilters.includes("wikipedia"));
    }, [searchData.siteFilters]);

    const updateSiteFilter = (site: string) => {
        if(searchData.siteFilters.includes(site))
            dispatch(searchActions.removeSiteFilter(site));
        else
            dispatch(searchActions.addSiteFilter(site));
    }

    return (
        <div className="filter-modal">
            <Button className="modal-btn" onClick={() => {setModalOpen(true)}}>
                <span className="heading-item">Filter Results</span>
            </Button>
            <Modal isOpen={modalOpen} fade={false} toggle={() => {setModalOpen(!modalOpen)}} className="filter">
                <ModalHeader toggle={() => setModalOpen(false)}>Search Filters</ModalHeader>
                <ModalBody>
                    <InputGroup>
                        Site(s):
                        <Label className="site-label" check>
                            <Input type="checkbox" className="check-input" name="amazon" value="amazon" 
                                checked={amazonChecked}
                                onChange={() => {
                                    setAmazonChecked(!amazonChecked);
                                    updateSiteFilter("amazon");
                                }} 
                            />
                            Amazon
                        </Label>
                        <Label className="site-label" check>
                            <Input type="checkbox" className="check-input" name="github" value="github" 
                                checked={githubChecked} 
                                onChange={() => {
                                    setGithubChecked(!githubChecked);
                                    updateSiteFilter("github");
                                }}
                            />
                            Github
                        </Label>
                        <Label className="site-label" check>
                            <Input type="checkbox" className="check-input" name="reddit" value="reddit" 
                                checked={redditChecked} 
                                onChange={() => {
                                    setRedditChecked(!redditChecked);
                                    updateSiteFilter("reddit");
                                }} 
                            />
                            Reddit
                        </Label>
                        <Label className="site-label" check>
                            <Input type="checkbox" className="check-input" name="wikipedia" value="wikipedia" 
                                checked={wikiChecked}
                                onChange={() => {
                                    setWikiChecked(!wikiChecked);
                                    updateSiteFilter("wikipedia");
                                }}
                            />
                            Wikipedia
                        </Label>
                    </InputGroup>
                </ModalBody>
                <ModalFooter>
                    <Button className="btn" onClick={() => setModalOpen(false)}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}