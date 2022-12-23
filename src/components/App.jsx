import { Component } from 'react';
import { SearchBar } from './Searchbar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { getGalleryImages } from '../service/api';
import { Loader } from '../components/Loader/Loader';
import { Button } from './Button/Button';
import { Message } from './App.styled';

export class App extends Component {
  state = {
    query: '',
    photos: [],
    imgLargeUrl: '',
    page: 1,
    perPage: 12,
    showBtn: false,
    error: null,
    isEmpty: false,
    isLoading: false,
  };

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (query !== prevState.query || page !== prevState.page) {
      this.setState({ isLoading: true });
      await getGalleryImages(query, page)
        .then(({ hits, totalHits }) => {
          if (hits.length === 0) {
            this.setState({ isEmpty: true });
            return;
          }
          this.setState(prevState => ({
            photos: [...prevState.photos, ...hits],
            showBtn: page < Math.ceil(totalHits / this.state.perPage),
          }));
        })
        .catch(error => this.setState({ error: error.message }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  onFormSubmit = query => {
    this.setState({
      query,
      photos: [],
      imgLargeUrl: '',
      page: 1,
      showBtn: false,
      error: null,
      isEmpty: false,
      isLoading: false,
    });
  };

  onImgClick = imgLargeUrl => {
    this.setState({ imgLargeUrl });
  };

  render() {
    const { photos, imgLargeUrl, showBtn, isEmpty, isLoading } = this.state;

    return (
      <>
        <SearchBar onFormSubmit={this.onFormSubmit} btnText="Search" />
        {isLoading && <Loader />}
        {isEmpty ? (
          <Message>Images not found</Message>
        ) : (
          <ImageGallery photos={photos} onImgClick={this.onImgClick} />
        )}
        {showBtn && <Button loadMore={this.loadMore} />}
        {imgLargeUrl && (
          <Modal largeImg={imgLargeUrl} onImgClick={this.onImgClick} />
        )}
      </>
    );
  }
}
